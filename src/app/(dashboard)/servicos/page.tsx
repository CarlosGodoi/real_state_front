import EffortlessPropertyManagement from "./components/effortlessPropertyManagement";
import SmartInvestments from "./components/smartInvestments";
import UnlockPropertyValue from "./components/unlockPropertyValue";

export default function Services() {
    return (
        <main className="w-full flex flex-col bg-gray_08">
            <div className="w-full h-[400px] flex items-center bg-gradient-to-r from-gray_15 to-gray_08 px-16 mobile_1:h-full mobile_1:static mobile_1:py-4 mobile_1:px-4">
                <div className="w-[90%] flex flex-col  gap-6 mobile_1:w-full">
                    <h2 className="text-5xl text-secondary font-semibold mobile_1:text-center mobile_1:mt-5">Eleve sua experiência imobiliária</h2>
                    <span className="text-lg text-gray_60 font-medium mobile_1:pb-5">
                        Bem-vindo a Prestigie, onde suas aspirações imobiliárias encontram orientação especializada.
                        Explore nossa ampla gama de serviços, cada um projetado para atender às suas necessidades e sonhos exclusivos.
                    </span>
                </div>
            </div>
            <section className="w-full flex flex-col px-16 py-10 mobile_1:px-4">
                <UnlockPropertyValue />
                <EffortlessPropertyManagement />
                <SmartInvestments />
            </section>
        </main>
    )
}