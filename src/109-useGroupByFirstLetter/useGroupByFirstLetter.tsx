import React from 'react'

export default function useGroupByFirstLetter() {

    const groupByFirstLetter = (data, propertyName) => {
        const groupByData = data.reduce((r, e) => {
            // get first letter of name of current element
            let group = e[propertyName][0].toUpperCase();
            // if there is no property in accumulator with this letter create it
            if (!r[group]) r[group] = { key: group, children: [e] }
            // if there is push current element to children array for that letter
            else r[group].children.push(e);
            // return accumulator
            return r;
        }, {})

        // since data at this point is an object, to get array of values
        // we use Object.values method
        return Object.values(groupByData);
    }

    return { groupByFirstLetter };
}
