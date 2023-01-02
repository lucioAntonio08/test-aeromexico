import {StaticImageData} from "next/image";
import {building, chart, greeting, sustainability, tools} from "../public/statics/images";

export interface CardIconProps {
    name:string,
    icon: StaticImageData
}

export const OptionCardIcons: CardIconProps[]=[
    {
        name:'Codigo de conducta',
        icon: greeting,
    },
    {
        name:'Reporte trimestral',
        icon: chart,
    },
    {
        name:'Reporte operacional',
        icon: tools,
    },
    {
        name:'Boletín de industria',
        icon: building,
    },
    {
        name:'Informe de sostenibilidad',
        icon: sustainability,
    }
]

export interface CardBannerProps {
    title: string,
    body: string,
    id: number,
    reactions?: string,
    tags?:number,
    userId?:number
}

export interface CardNewsProps {
    text: string
}

export interface GenericCardProps {
    children: JSX.Element
}

export interface GetUserProps {
    id: number,
    firstName: string
    image: string
}


