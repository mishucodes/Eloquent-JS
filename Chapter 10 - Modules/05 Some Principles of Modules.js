//Good program design is subjective—there are trade-offs involved and matters of taste. But there are some Best-Practices/Tips/Principles regarding Modules that the author wants us to know:
    //a) Ease of Use: It is helpful if the interface is simple and predictable.
    //b) That may mean following existing conventions.
    //c) If there’s no standard function or widely used package to imitate, you can keep your modules predictable by using simple data structures and doing a single, focused thing.
    //d) Focused modules that compute values are applicable in a wider range of programs than bigger modules that perform complicated actions with side effects.
    //e) If something can be done with a function, use a function.
    //f) Often defining new data structures can’t be avoided. But when an array suffices, use an array.


//An Example (Dijkstra's Algorithm):
//A well-known approach to pathfinding, quite similar to our "findRoute()" function, is called Dijkstra’s algorithm, after Edsger Dijkstra, who first wrote it down. The js suffix is often added to package names to indicate the fact that they are written in JavaScript.
//This dijkstrajs package uses a graph format similar to ours, but instead of arrays, it uses objects whose property values are numbers—the weights of the edges.
//So if we wanted to use that package, we’d have to make sure that our graph was stored in the format it expects. All edges get the same weight since our simplified model treats each road as having the same cost (one turn).
    const {find_path} = require("dijkstrajs");
    let graph = {};
    for (let node of Object.keys(roadGraph))
    {
        let edges = graph[node] = {};
        for (let dest of roadGraph[node])
            edges[dest] = 1;
    }
    console.log(find_path(graph, "Post Office", "Cabin")); //["Post Office", "Alice's House", "Cabin"]