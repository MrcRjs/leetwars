export function comp(array1, array2)
{
    if(!array1 || !array1 || array2 === null || array1.length !== array2.length)
    {
        return false;
    }

    const squares1 = array1.map(n => n*n).sort((a,b) => a-b);

    const squares2 = array2.sort((a,b) => a-b);

    for (let i = 0; i < squares2.length; i++)
    {
        if(squares1[i] !== squares2[i])
        {
            return false;
        }
    }
    return true;
}