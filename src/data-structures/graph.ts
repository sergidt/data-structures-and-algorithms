import { bfs, breadthFirstSearch } from "../algorithms/graphs/bfs";

export default class Graph<K = string | number> {
    private _vertices: Array<K> = [];
    private _adjacentList: Map<K, Array<K>> = new Map<K, Array<K>>();

    constructor(private isDirected = false) { }

    addVertex(v: K) {
        if (!this._vertices.includes(v)) {
            this._vertices.push(v);
            this._adjacentList.set(v, []); // initialize adjacency list with array as well;
        }
    }

    addEdge(a: K, b: K) {
        if (!this._adjacentList.get(a)) {
            this.addVertex(a);
        }
        if (!this._adjacentList.get(b)) {
            this.addVertex(b);
        }
        this._adjacentList.get(a).push(b);
        if (this.isDirected !== true) {
            this._adjacentList.get(b).push(a);
        }
    }

    getVertices() {
        return this._vertices;
    }

    getAdjacentList() {
        return this._adjacentList;
    }

    toString() {
        let s = '';
        for (let i = 0; i < this._vertices.length; i++) {
            if (this._adjacentList.get(this._vertices[i]).length) {
                s += this._vertices[i] + ' -> ';
                const neighbors = this._adjacentList.get(this._vertices[i]);
                s += neighbors.join(',');
                s += '\n';
            }
        }
        return s;
    }
}

export function graphTest() {
    const g = new Graph<number>(true);

    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.addEdge(3, 4);
    g.addEdge(4, 5);
    console.log('graph', g.toString());

    breadthFirstSearch(g, 1, console.log);
    console.log(bfs(g, 1));
}