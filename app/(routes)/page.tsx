import Container from "@/components/ui/container"
import getBillboard from "@/actions/get-billboard"
import Billboard from "@/components/billboard"

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("0e09643d-9225-41d9-aa84-58678486c657");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard 
                    data={billboard}
                
                />
            </div>
        </Container>
    )
}

export default HomePage