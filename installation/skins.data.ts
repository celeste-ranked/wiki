interface Skin {
    name: string
    url: string
}
export declare const data: Skin[]

export default {
    async load(): Promise<Skin[]> {
        try {
            const res = await fetch('https://api.celesteranked.com/mods/approved-skins')
            const { data } = await res.json() as { data: Skin[] }
            return data.map(({ name, url }) => ({name, url}))
        } catch (err) {
            console.warn('[skins.data] couldnt fetch approved skins, building without it', err)
            return []
        }
    }
}
