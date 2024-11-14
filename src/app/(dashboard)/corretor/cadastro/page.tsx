import { RegisterBrokerForm } from "./components/registerForm"

const BrokerRegistration = () => {
    return (
        <div className="w-full flex flex-col bg-gray_08">
            <h2 className="text-secondary text-3xl font-semibold px-16 py-10 mobile_1:px-4 mobile_1:text-center">Cadastrar usuários</h2>
            <RegisterBrokerForm />
        </div>
    )
}

export default BrokerRegistration