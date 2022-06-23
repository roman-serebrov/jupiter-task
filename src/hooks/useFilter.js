import { useMemo } from "react";
const useSearchDelCard = (cards, del_id, more) => {
    const sortedCards = useMemo(() => {
        if(del_id) {
            return [...cards].filter((item) => item.id !== del_id);
        }
    },[cards, del_id]);
    return sortedCards || [...cards];
};

export const useCards =  (cards, query, del_id, more) => {
    const sortedPosts = useSearchDelCard(cards, del_id, more);

    const searchCards = useMemo(() => {
        if(query === 'Show All') return [...sortedPosts];
        return sortedPosts.filter((item) => item.name.toLowerCase() === query.toLowerCase());
    }, [sortedPosts, query]);
    return searchCards;
}