import styles from './ContactForm.module.css'

export const ContactForm = () => {
    return (
        <div className={styles.form}>
            <h2>Formulário de contato</h2>
            <form>
                <div>
                    <label htmlFor="nome">Digite seu nome:</label>
                    <input type="text" placeholder="Ex: Victor Trajano" id="nome" />
                </div>
                <div>
                    <label htmlFor="email">Digite seu email:</label>
                    <input type="text" placeholder="Ex: gg@gg.com" id="email" />
                </div>
                <div>
                    <label htmlFor="select">Motivo do contato:</label>
                    <select name="select" id="select">
                        <option value="default" selected>--Selecione uma opção</option>
                        <option value="option1">React é muito bom</option>
                        <option value="option2">Adeus javascript puro</option>
                        <option value="option3">Só isso mesmo</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message">Digite sua mensagem:</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
    );
}