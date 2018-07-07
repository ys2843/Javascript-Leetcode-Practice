class UF {

    constructor(N) {

        this.id = new Array(N).fill(0).map((x, index) => index)
        this.sz = new Array(N).fill(1)
    }

    find(p) {
        while (p !== this.id[p]) p = this.id[p]
        return p
    }

    union(p, q) {
        let pRoot = this.find(p);
        let qRoot = this.find(q);

        if (pRoot == qRoot) return;

        if (this.sz[pRoot] < this.sz[qRoot]) {

            this.id[p] = qRoot;

            this.sz[qRoot] += this.sz[pRoot]

        } else {

            this.id[q] = pRoot;

            this.sz[pRoot] += this.sz[qRoot]
        }
    }

}

var uf = new UF(10);
uf.union(3, 4);
console.log(uf.id);