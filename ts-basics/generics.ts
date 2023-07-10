// Generics is like narrowing down from type any to any of the few allowed.

function simpleGenericState<T>(initial: T): [() => T, (v: T) => void]{
    let val: T = initial;
    return [
        () => val,
        (v: T) => val = v
    ]
}


const [st1getter, st1setter] = simpleGenericState(true)
// state system automatically knows to apply boolean as a type
// simpleGenericState(initial: boolean): [() => boolean, (v: boolean) => void]

const [st2getter, st2setter] = simpleGenericState(1)
// state system automatically knows to apply number as a type
// simpleGenericState(initial: number): [() => number, (v: number) => void]

const [st3getter, st3setter] = simpleGenericState('a')
// state system automatically knows to apply string as a type
// simpleGenericState(initial: string): [() => string, (v: string) => void]

// but how do we have several possible types 
// Overriding inferred generic type

const [st4getter, st4setter] = simpleGenericState<string | number>('a')

st4setter(1)


// Make an interface generic
interface Rank<RankItem>{
    item: RankItem;
    rank: number;
}

function ranker<RankItem>(
    items: RankItem[],
    rank: (v: RankItem) => number
): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map((item) => ({
        item,
        rank: rank(item),
    }));

    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}

interface Pokemon {
    name: string,
    hp: number
}

const pokemon: Pokemon[] = [
    {
        name: 'Bulbasaur',
        hp: 20
    },
    {
        name: 'Megasaur',
        hp: 5
    }
]

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
