import useStore from './store'

function User() {
  const name = useStore((state) => state.name)
  const changeName = useStore((state) => state.changeName)

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default User