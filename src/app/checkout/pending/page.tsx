import { FeedbackLayout } from '@/components/FeedbackLayout';

export default function PendingPage() {
    return (
        <FeedbackLayout
            title="Quase tudo pronto!"
            description="O Mercado Pago está analisando sua transação. Isso pode levar alguns minutos. Assim que o status mudar, nós te avisaremos."
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-amber-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            }
            colorClass=""
            primaryActionText="Voltar para a Loja"
            primaryActionHref="/"
        />
    );
}