import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { trpc } from './trpc'

import './index.scss'

const client = new QueryClient()

const AppContent = () => {
  const getMessages = trpc.useQuery(['getMessages'])
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')

  const addMessage = trpc.useMutation('addMessage')

  const onAdd = () =>
  {
    addMessage.mutate({
      message,
      user
    }, {
      onSuccess: () =>
      {
        client.invalidateQueries(['getMessages'])
      }
    })
  }

	return (
		<div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <div>{(getMessages.data ?? []).map(row => (
        <div key={row.message}>{ JSON.stringify(row)}</div>
      ))}</div>
      <div className="mt-10">
        <input value={user} placeholder='User' onChange={(e)=>setUser(e.target.value) } type="text" className="p-5 border-2 border-gray-300 rounded-lg w-full" />
        <input value={message} placeholder='Message' onChange={(e)=>setMessage(e.target.value) } type="text" className="p-5 border-2 border-gray-300 rounded-lg w-full" />
      </div>
      <button className='text-indigo-600' type='button' onClick={onAdd}>Add</button>
		</div>
	)
}

const App = () => {
	const [trpcClient] = useState(() =>
		trpc.createClient({
			url: 'http://localhost:8080/trpc'
		})
	)

	return (
		<trpc.Provider client={trpcClient} queryClient={client}>
			<QueryClientProvider client={client}>
				<AppContent />
			</QueryClientProvider>
		</trpc.Provider>
	)
}
ReactDOM.render(<App />, document.getElementById('app'))
