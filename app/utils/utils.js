/* Aggregations of all utilities */

export const conversionByIdConverter = oData => {
    /*
        See list2.json as to how the conversation by ID data
        is arranged. Because its returned as an object that is 
        hard to be interpreted on a list based UI, so this
        util is to help convert the necessary data to make the
        UI generation much easier. 
    */

    const mList = [];

    /*
        We're going to fashioned each branch data to mimic the rootPhrase data
    */

    // For first item
    mList.push({
        id: oData.rootPhrase.id,
        root: oData.rootPhrase,
        child: []
    });

    // For subsequent items
    oData.branches.forEach( b => {
        let pClone = Boolean(b.phrases) && Boolean(b.phrases.length) && [ ...b.phrases ] || [];
        let pRoot = Boolean(pClone.length) && pClone.shift();
        let pRest = pClone;

        let tempData = {
            id: b.id,
            root: pRoot,
            child: pRest
        };

        mList.push(tempData);
    });

    const mData = { 
        id: oData.id, 
        title: oData.title,
        list: mList
    };

    return mData;
}