//My Version:
let legalPersons = ['humans', 'states', ['companies', 'firms', 'NGOs', 'trusts', 'societies', ['LLPs', 'JV', 'LP']]];
function flattenArray(array)
{
    return array.reduce((accumulator, element) =>
        {
            if (Array.isArray(element))
                accumulator.push(...flattenArray(element)); //recursion...
            else
                accumulator.push(element);
            return accumulator;
        }, []);
}
console.log(flattenArray(legalPersons));
//There's also a JS Method for this:
console.log(legalPersons.flat(Infinity));


//Author's Version:
console.log(legalPersons.reduce((flat, current) => flat.concat(current), [])); //works only till a few layers of nesting...