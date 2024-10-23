import { RegisterBrokerForm } from "./components/registerForm"

const BrokerRegistration = () => {
    return (
        <div className="w-full flex flex-col bg-gray_08">
            <h2 className="text-secondary text-3xl font-semibold px-16 py-10">Cadastrar usuários</h2>
            <RegisterBrokerForm />
        </div>
    )
}

export default BrokerRegistration