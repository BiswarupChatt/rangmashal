// import BloodDonationCamp from "./projectDetails/BloodDonationCamp"
// import AmphanReliefWork from "./projectDetails/AmphanReliefWork"

import ProjectDetails from "./ProjectDetails"

const eventsData = [
    {
        title: 'Blood Donation Camp',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fugiat aliquid itaque aspernatur rem commodi non, modi consequuntur quia natus quis repellendus distinctio, reiciendis dolore obcaecati neque culpa atque. Magnam quibusdam eum dicta, voluptas neque perferendis? Quidem sint debitis, sunt omnis hic sequi provident atque officiis distinctio at quod rem.',
        subEvents: [
            {
                subTitle: 'Blood Donation Camp: Part 1',
                subDescription: 'On the occasion of International Mother Language Day to pay homage to our brave martyrs, we organized a blood donation camp in association with Ashok Laboratory at Subodhpark Saptarshi Friend’s Association club. This was our very first project after Government registration as Rangmashal Foundation.',
                date: '21st February, 2021',
                images: [
                    'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
                    'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
                ],
            },
            {
                subTitle: 'Blood Donation Camp: Part 2',
                subDescription: 'Rangmashal Foundation organized a blood donation camp in association with Baruipur Sub-divisional Hospital at Garfa North Star Association. It was our second Blood Donation Camp after the first on 21st February 2021.',
                date: '16th October',
                images: [
                    'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
                    'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
                ],
            },
        ],
    },
    {
        title: 'Amphan Relief Work',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fugiat aliquid itaque aspernatur rem commodi non, modi consequuntur quia natus quis repellendus distinctio, reiciendis dolore obcaecati neque culpa atque. Magnam quibusdam eum dicta, voluptas neque perferendis? Quidem sint debitis, sunt omnis hic sequi provident atque officiis distinctio at quod rem.',
        subEvents: [
            {
                subTitle: 'Kumartuli',
                subDescription: 'On 2nd June, 2020 we extended our hands to Kumartuli, which was devastated by the cyclone “Amphan”. There we distributed near about 50 packets of ration. In this project we were assisted by Mr. Apurba Pal, one of the sculptors of the Kumartuli. He was a great help to us for that project.',
                date: '2nd June, 2020',
                images: [
                    'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
                    'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
                ],
            },
            {
                subTitle: 'Sundarban',
                subDescription: 'We also extended our hands towards the Sundarban, which was devastated by the cyclone Amphan. Our members went there and gave away day to day necessary items like medicine, sanitary napkins and other items. We also gave away new clothes and a packet of ration to the people there.',
                date: '14th June, 2020',
                images: [
                    'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg',
                    'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg',
                ],
            },
        ],
    },
];


export default function AllProjects() {

    return (
        <>
            {eventsData.map((event, index) => (
                <ProjectDetails
                    key={index}
                    events={event}
                    order={index}
                />
            ))}
        </>
    );
}