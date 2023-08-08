import Container from "@/components/ui/container"
import getBillboard from "@/actions/get-billboard"
import Billboard from "@/components/billboard"
import getProducts from "@/actions/get-products"
import ProductList from "@/components/product-list"

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("0e09643d-9225-41d9-aa84-58678486c657");
    const products = await getProducts({ isFeatured: true });

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard 
                    data={billboard}
                />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container>
    )
}

export default HomePage