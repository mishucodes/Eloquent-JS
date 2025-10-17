function buildGraph(edges)
{
    // let graph = Object.create(null);
    let graph = Object.create(Object.prototype); //looks cleaner on the console...
    function addEdge(from, to)
    {
        if (from in graph)
            graph[from].push(to);
        else
            graph[from] = [to];
    }
    for (let [from, to] of edges.map(r => r.split("-")))
    {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}


export {buildGraph};