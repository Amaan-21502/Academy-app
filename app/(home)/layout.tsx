import Topbar from "../../components/layout/Topbar"

const homeLayout = ({children} : {children: React.ReactNode})=> {
  return (
    <>
        <Topbar />
        {children}
    </>
  )
}

export default homeLayout