export default function Checkout(){

    return(
        <Box>
            <Header>
                <OrderDescription>
                    <p>Produto</p>
                    <p>Preço</p>
                    <p>Quantidade</p>
                </OrderDescription>
            </Header>
            <PaymentBox>
            <Forms >
            <Input type="text"  placeholder=" Nome impresso no cartão" onChange={Change} name='cardName'  />
            <Input type="text"  placeholder=" Digitos do cartão" onChange={Change} name='cardNumber' />
            <Security>
                <InputSecurity type="password"  placeholder=" Código de segurança" onChange={Change} name='securityNumber'  />
                <InputSecurity type="text"  placeholder=" Validade */*" onChange={Change} name='expirationDate' />
            </Security>
                <button>
                    <p> ASSINAR</p>
                </button>
                </Forms>
            </PaymentBox>
        </Box>
    )
}