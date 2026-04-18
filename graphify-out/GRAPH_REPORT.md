# Graph Report - C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3  (2026-04-18)

## Corpus Check
- 14 files · ~3,311 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 26 nodes · 17 edges · 12 communities detected
- Extraction: 71% EXTRACTED · 29% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `useReveal()` - 6 edges
2. `About()` - 2 edges
3. `Contact()` - 2 edges
4. `Experience()` - 2 edges
5. `Projects()` - 2 edges
6. `Skills()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Experience()` --calls--> `useReveal()`  [INFERRED]
  C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3\src\components\Experience.jsx → C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3\src\hooks\useReveal.js
- `Projects()` --calls--> `useReveal()`  [INFERRED]
  C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3\src\components\Projects.jsx → C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3\src\hooks\useReveal.js
- `Skills()` --calls--> `useReveal()`  [INFERRED]
  C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3\src\components\Skills.jsx → C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3\src\hooks\useReveal.js
- `About()` --calls--> `useReveal()`  [INFERRED]
  C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3\src\components\About.jsx → C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3\src\hooks\useReveal.js
- `Contact()` --calls--> `useReveal()`  [INFERRED]
  C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3\src\components\Contact.jsx → C:\Users\kumar\Downloads\portfolio-v3-source\portfolio-v3\src\hooks\useReveal.js

## Communities

### Community 0 - "Community 0"
Cohesion: 0.33
Nodes (3): About(), Contact(), useReveal()

### Community 1 - "Community 1"
Cohesion: 0.5
Nodes (1): Projects()

### Community 2 - "Community 2"
Cohesion: 1.0
Nodes (0): 

### Community 3 - "Community 3"
Cohesion: 1.0
Nodes (1): Experience()

### Community 4 - "Community 4"
Cohesion: 1.0
Nodes (0): 

### Community 5 - "Community 5"
Cohesion: 1.0
Nodes (0): 

### Community 6 - "Community 6"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (1): Skills()

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Community 2`** (2 nodes): `App()`, `App.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 3`** (2 nodes): `Experience.jsx`, `Experience()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 4`** (2 nodes): `Footer.jsx`, `Footer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 5`** (2 nodes): `Hero.jsx`, `Hero()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 6`** (2 nodes): `Navbar.jsx`, `Navbar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (2 nodes): `Skills.jsx`, `Skills()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (1 nodes): `main.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (1 nodes): `content.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useReveal()` connect `Community 0` to `Community 1`, `Community 3`, `Community 7`?**
  _High betweenness centrality (0.227) - this node is a cross-community bridge._
- **Why does `Projects()` connect `Community 1` to `Community 0`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `useReveal()` (e.g. with `About()` and `Contact()`) actually correct?**
  _`useReveal()` has 5 INFERRED edges - model-reasoned connections that need verification._