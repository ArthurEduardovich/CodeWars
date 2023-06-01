function DNAStrand(dna) {
  function rep(s) {
    if (s === 'T') return 'A';
    if (s === 'A') return 'T';
    if (s === 'C') return 'G';
    if (s === 'G') return 'C';
  }
  return dna.replace(/[ATCG]/g, rep);
}
console.log(DNAStrand('ATTGC'))
