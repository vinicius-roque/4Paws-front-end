export default function Cart(){

    return(
        <>
        <Header>
            <p> Carrinho de compras</p>
            <Freeship>
                <p> FRETE GRÁTIS BRASIL</p>
                <h1> Confira as regras</h1>
            </Freeship>
        </Header>
        <CartBox>
            <p>Produto</p>
            <p>Preço</p>
            <p>Quantidade</p>
            <ProductBox>
                <p>Imagem</p>
                <p>Descrição</p>
                <p>Preço</p>
                <p>Quantidade</p>
            </ProductBox>
        </CartBox>
        <Footer>
            <p>Total da compra</p>
            <p>Total</p>
            <button>
                <p>Continuar</p>
            </button>
        </Footer>
        </>
    )
}