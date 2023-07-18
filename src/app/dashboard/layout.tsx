import Header1 from "../components/Header1"
import Header2 from "../components/Header2"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header1/>
        <Header2/>
        <div>
            {children}
        </div>      
      </>
    )
  }