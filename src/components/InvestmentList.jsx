import TableList from "./TableList";

export default function InvestmentList({}) {
    return <main className="center">
        <TableList headerList={["Year", "Return Value", "Duration", "Investment Year"]} itemList={[["123", "test", "test", "test"], ["123", "test", "test", "test"]]}></TableList>
    </main>
}