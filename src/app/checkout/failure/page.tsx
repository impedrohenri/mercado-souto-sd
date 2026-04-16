import { FeedbackLayout } from '@/components/FeedbackLayout';

export default function FailurePage() {
    return (
        <FeedbackLayout
            title="Pagamento não aprovado"
            description="Infelizmente, houve um problema e seu pagamento não foi processado. Por favor, verifique os dados do cartão ou tente outro método."
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            }
            colorClass=""
            primaryActionText="Voltar para a Loja"
            primaryActionHref="/"
        />
    );
}