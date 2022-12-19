import { Container } from "./style";

export function Payment (){

return(
    <Container>
        <div className="content">
            <div className="cardProduct">
                
            </div>
            <div className="data">
                <div className="personalData">
                    <h2>Dados Pessoais</h2>
                    <div className="context">
                    <input type="text" name="name" placeholder="Nome completo" className="info" />
                    <input type="number" name="CPF" placeholder="Seu CPF" className="info"/>
                    <input type="tel" name="número de telefone" placeholder="Telefone: (21) 91111-5522" className="info" />
                    </div>
                </div>

                <div className="address">
                    <h2>Endereço</h2>
                    <div className="context">
                        <input type="text" placeholder="Rua" className="info"/>
                        <input type="text" placeholder="Bairro" className="info"/>
                        <input type="text" placeholder="Município" className="info"/>
                        <input type="text" placeholder="Estado" className="info"/>
                        <input type="text" placeholder="CEP" className="info"/>
                    </div>  
                </div>

                <div className="transport">
                        <h2>Escolha o Frete</h2>
                        <form className="context">
                            <div className="contextInfo">
                                <input type="radio" name="gratis" />
                                <label htmlFor="gratis"> Grátis (7-10 dias)</label>
                            </div>
                            <div className="contextInfo">
                                <input type="radio" name="15 reais" />
                                <label htmlFor="15 reais"> 15 reais (5-7 dias)</label>
                            </div>
                            <div className="contextInfo">
                                <input type="radio" name="20 reais" />
                                <label htmlFor="20 reais"> 20 reais (2-5 dias)</label>
                            </div>
                        </form>
                </div>

                <div className="payment">
                        <h2>Escolha o Método de Pagamento</h2>

                        <div className="context">
                            <div className="contextInfo">
                                <input type="radio" name="Boleto" />
                                <label htmlFor="Boleto">Boleto Bancário</label>
                            </div>
                            <div className="contextInfo">
                                <input type="radio" name="Pix" />
                                <label htmlFor="Pix">Pix (Leva poucos minutos para confirmar)</label>
                            </div>
                            <div className="contextInfo">
                                <input type="radio" name="transferencia bancária" />
                                <label htmlFor="transferencia bancária">Transferencia Bancária</label>
                            </div>
                            <div className="contextInfo">
                                <input type="radio" name="Cartão de Crédito" />
                                <label htmlFor="Cartão de Crédito">Cartão de Crédito (até 12x sem juros)</label>
                            </div>

                        </div>

                </div>
                
            </div>

            <input type="button" value="🔒 Finalizar Compra"className="btn"/>
        </div>
    </Container>
)
}