import { RegisterImmobilesForm } from "./components/registerImmobilesForm"

const RegisterImmobiles = () => {
    return (
        <div className="w-full flex flex-col bg-gray_08">
            <h2 className="text-secondary text-3xl font-semibold px-16 py-10 mobile_1:px-4 mobile_1:text-center">Cadastro de Imóveis</h2>
            <RegisterImmobilesForm />
        </div>
    )
}

export default RegisterImmobiles