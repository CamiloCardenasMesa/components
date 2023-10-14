import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'asdvasrfv54',
            label: 'Can I use React on a project?',
            content: 'You can use everyting you want. You can use everyting you want. You can use everyting you want'
        },
        {
            id: 'afnrgfl',
            label: 'Can I use Javascript on a project?',
            content: 'You can use everyting you want little bird. You can use everyting you want little bird. You can use everyting you want little bird'
        },
        {
            id: 'dgbns',
            label: 'Can I use Css on a project?',
            content: 'You can use everyting you want my little cat. You can use everyting you want my little cat. You can use everyting you want my little cat'
        },
    ];

   return <Accordion items={items} />
}

export default AccordionPage;