import { TechnologyInterface } from '@/interfaces/TechnologyInterface'

export interface TechnologiesInterface {
    categories: Array<{ title: string; items: Array<TechnologyInterface> }>
}
