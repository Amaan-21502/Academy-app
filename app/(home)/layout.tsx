import TopBar from "../components/TopBar"

const homeLayout = ({children} : {children: React.ReactNode})=> {
  return (
    <>
        <TopBar />
        {children}
    </>
  )
}

export default homeLayout