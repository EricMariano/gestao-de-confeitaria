import CardsGrid from "./CardsGrid"
import MyChart from "./ChartOne"

export default function Dashboard() {
    return(
        <> 
            <h1 className="text-2xl font-bold text-[var(--color-text-site)] mb-5">Dashboard</h1>
            
            {/* card  */}
            <CardsGrid />
            {/* <MyChart /> */}
        </>
    )
}