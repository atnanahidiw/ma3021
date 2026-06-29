# Research Findings for MA3021 Interactive Algebra Site

This document summarizes the research findings, design reasoning, and content decisions used to improve the MA3021 interactive algebra learning site.

The goal of the site is not only to present definitions, but to help students understand abstract algebra through compact explanations, concrete examples, visual widgets, and small interactive checks.

---

## 1. Main Learning Problem

Abstract algebra is difficult because many concepts are not physical objects. Students often read words such as **group**, **ring**, **field**, **normal subgroup**, **ideal**, or **homomorphism**, but they do not yet see:

- what the object is,
- what the operation is,
- what must stay consistent,
- what can go wrong,
- why the concept matters.

The site therefore needs to make every topic answer four questions:

1. **What is the object?**
2. **What operation or rule is being studied?**
3. **What property must be preserved?**
4. **What real-world situation makes the idea useful?**

---

## 2. High-Level Pedagogical Findings

### 2.1 Use visual and exploratory learning for abstract algebra

Visual Group Theory and Group Explorer both show that group theory becomes easier when students can see actions, symmetries, Cayley tables, cosets, and quotient-like grouping visually.

Finding:

> For beginners, abstract algebra should begin with visible actions and patterns before formal notation.

Applied in the site:

- finite groups use robot/sticker rotation instead of only symbolic groups,
- normal subgroup uses coset blocks instead of only formulas,
- cyclic code uses shifting bits to show multiplication by \(x\),
- polynomial factorization uses visible roots across different fields.

Useful references:

- Visual Group Theory, Nathan Carter:  
  https://web.osu.cz/~Zusmanovich/teach/books/visual-group-theory.pdf
- Group Explorer:  
  https://nathancarter.github.io/group-explorer/index.html
- Group Explorer group terms and coset/quotient support:  
  https://nathancarter.github.io/group-explorer/help/rf-groupterms/index.html

---

### 2.2 Reduce cognitive load with compact worked examples

Worked examples help beginners because they show the reasoning pattern before asking students to solve independently. This is especially important when the topic has many new terms.

Finding:

> Students should see one small complete example before the quiz or lab question.

Applied in the site:

Each topic includes a compact example such as:

- function classification from a tiny mapping,
- modulo arithmetic from a digit-check example,
- order of a 90-degree rotation,
- coset \(2+H\) in \(\mathbb Z_{12}\),
- kernel of \(\varphi:\mathbb Z_6\to\mathbb Z_3\),
- zero divisor in \(\mathbb Z_6\),
- \(3\cdot3=0\) in \(\mathbb Z_9\),
- kernel of \(\mathbb Z_{12}\to\mathbb Z_4\),
- evaluating \(1+2x+3x^2\) at \(x=2\) in \(\mathbb Z_7\),
- factoring \(x^2+1\) in \(\mathbb Z_5\).

Useful reference:

- Worked examples and cognitive load discussion:  
  https://www.tandfonline.com/doi/full/10.1080/01443410.2023.2273762

---

### 2.3 Use prediction before interaction

Interactive widgets become more useful when students are asked to predict before clicking. Without this, the widget may become decoration: students see animation but do not know what to learn from it.

Finding:

> Interaction should make students compare their expectation with the result.

Applied in the site:

Every lab now includes:

> “Sebelum klik tombol: coba prediksi hasilnya terlebih dahulu, lalu bandingkan dengan visualisasi.”

This turns the widget into a learning loop:

1. predict,
2. click,
3. observe,
4. compare,
5. revise understanding.

---

### 2.4 Real-world examples should be simple enough to clarify, not complex enough to distract

Real-world examples are useful only if the example does not introduce more complexity than the mathematical idea itself.

Finding:

> If the real-world example is harder than the concept, replace it with a simpler analogy.

Applied in the site:

- “Molecular symmetry” was simplified to sticker/square symmetry.
- “Security role normality” was simplified to permutations of three cards.
- QR/Reed-Solomon remains, but only as a small polynomial-evaluation model.
- AES remains, but the lab uses \(GF(2^4)\) instead of full \(GF(2^8)\).
- Homomorphism uses sensor/dashboard compression before more abstract algebraic maps.

Design principle:

> Use real-world examples when they make the mathematical object visible. Use toy examples when the real system would overwhelm the learner.

---

### 2.5 Misconceptions should be shown explicitly

Beginners often misunderstand abstract algebra not because they cannot compute, but because they attach the wrong meaning to a term.

Finding:

> A “Kesalahan umum” section is valuable for abstract concepts because it prevents students from memorizing the wrong rule.

Applied in the site:

Every topic now has a colorful **Kesalahan umum** box.

Examples:

- A function does not need to be one-to-one.
- \(a\equiv b\pmod n\) does not mean \(a=b\).
- A group does not have to be a set of numbers.
- Not every subgroup is normal.
- A homomorphism is not just any function.
- A ring does not necessarily allow division.
- \(\mathbb Z_n\) is a field only when \(n\) is prime.
- An ideal is not just an ordinary subring.
- Polynomial factorization depends on the coefficient field.

Useful reference on misconceptions in group theory:

- Jurnal Analisa/Riset Pendidikan Matematika on group theory misconceptions:  
  https://jurnal.unsil.ac.id/index.php/jarme/article/download/5967/2512

---

## 3. Page-Level Content Decisions

### 3.1 Himpunan dan Fungsi

Core idea:

> A function is an unambiguous input-output rule.

Best example:

- student ID → program,
- user ID → role,
- role → access permission.

Why this example works:

The learner can physically imagine an ID card or account. If one ID has two conflicting outputs, the system fails. This makes the definition “each input has exactly one output” concrete.

Widget interpretation:

- left dots = domain,
- right dots = codomain,
- arrows = mapping,
- repeated output = not injective,
- all right-side targets used = surjective,
- one input with two outputs = not a function.

---

### 3.2 Teori Bilangan Dasar

Core idea:

> Modulo is arithmetic of remainders and repeated cycles.

Best example:

- clocks,
- weekdays,
- barcode/check digit.

Why this example works:

Modulo becomes visible as “wrapping around.” Check digits show that modulo is not just a school exercise; it helps detect typing errors.

Widget interpretation:

- generate check digit,
- change one digit,
- test whether the remainder still satisfies the rule.

Safer alternative:

Cryptography is important, but for beginners, check digits are easier than RSA. RSA should remain a second lab, not the first explanation.

---

### 3.3 Grup Hingga

Core idea:

> A group is a set of actions that can be combined and undone.

Best example:

- robot turns,
- square/sticker rotations,
- simple symmetry.

Why this example works:

A student can imagine turning right, turning left, and returning to the original direction. This makes identity and inverse concrete.

Widget interpretation:

- each turn changes direction,
- 0 degrees is identity,
- opposite turn is inverse,
- repeated turns show order.

Better alternative to complex examples:

Molecular symmetry is mathematically valid but too far from everyday intuition. Sticker or robot rotation is better for first exposure.

---

### 3.4 Subgrup Normal

Core idea:

> A normal subgroup allows elements to be grouped into blocks without breaking the operation.

Best example:

- direction classes,
- modulo blocks,
- simple card permutations.

Why this example works:

Normality is hard because it is about consistency of a new simplified system. Blocks/cosets make the idea visible.

Widget interpretation:

- each coset is a block,
- quotient means treating each block as one new object,
- normality means the operation between blocks is well-defined.

Important explanation:

The key question is not “what is the formula?” but:

> If I choose a different representative from the same block, do I still get the same block result?

---

### 3.5 Homomorfisma Grup

Core idea:

> A homomorphism is a structure-preserving function.

Best example:

- detailed sensor state → simplified dashboard label,
- 24-hour clock → shift class,
- modulo compression.

Why this example works:

Students understand that summaries can lose detail. Kernel then becomes meaningful as “what disappears into identity.”

Widget interpretation:

- check whether the operation is preserved,
- look at which elements become identity,
- those elements form the kernel.

Important explanation:

A homomorphism is not just a function. It must satisfy:

\[
\varphi(a+b)=\varphi(a)+\varphi(b)
\]

for additive groups.

---

### 3.6 Ring

Core idea:

> A ring is a structure with addition and multiplication that work together.

Best example:

- LED brightness modulo \(n\),
- circular counters,
- fixed-size digital values.

Why this example works:

Students can imagine values wrapping around. It also makes zero divisors easy to see.

Widget interpretation:

- green elements = units,
- red elements = zero divisors,
- prime \(n\) behaves differently from composite \(n\).

Important explanation:

A ring is not automatically a field. Division may fail.

---

### 3.7 Daerah Integral dan Field

Core idea:

> A field is a ring where every nonzero element can be divided by.

Best example:

- solving \(ax=b\) modulo \(p\),
- recovery of missing data,
- finite-field arithmetic.

Why this example works:

The equation \(ax=b\) shows immediately why inverses matter. AES and Reed-Solomon are important, but the first learning step should be solving small equations.

Widget interpretation:

- choose prime \(p\),
- solve \(ax=b\),
- see whether \(a\) has an inverse.

Important explanation:

\[
\mathbb Z_p
\]

is a field when \(p\) is prime. \(\mathbb Z_9\) is not an integral domain because:

\[
3\cdot3=9\equiv0\pmod9
\]

even though \(3\neq0\).

---

### 3.8 Homomorfisma Ring dan Ideal

Core idea:

> An ideal is a subset that absorbs multiplication from the whole ring.

Best example:

- cyclic bit shifts,
- kernel of \(\mathbb Z_{12}\to\mathbb Z_4\),
- cyclic codes as stable sets of codewords.

Why this example works:

Cyclic shifting is visual. It shows stability: after a valid operation, the object remains in the same family.

Widget interpretation:

- bit string = codeword,
- shift = cyclic operation,
- polynomial representation changes with the shift,
- modulo \(x^n-1\) explains why the end wraps around.

Important explanation:

Kernel of a ring homomorphism is always an ideal.

---

### 3.9 Ring Polinomial

Core idea:

> A polynomial can represent a list of data, and polynomial operations can transform that data.

Best example:

- message coefficients,
- polynomial evaluation,
- small Reed-Solomon-like redundancy,
- simple audio convolution.

Why this example works:

A list of numbers becoming coefficients makes polynomials feel useful. Evaluating at multiple points gives a simple view of redundancy.

Widget interpretation:

- coefficients = message,
- evaluation points = transmitted symbols,
- extra points = redundancy.

Important caution:

QR/Reed-Solomon is real but complex. The site should only show a small toy version so the concept remains understandable.

---

### 3.10 Faktorisasi Polinomial

Core idea:

> Polynomial factorization depends on the field.

Best example:

- compare roots of \(x^2+1\) in different \(\mathbb Z_p\),
- choose irreducible polynomial for finite-field construction.

Why this example works:

Students can directly test roots. They can see that the same polynomial behaves differently in different fields.

Widget interpretation:

- choose polynomial,
- compare several fields,
- see where roots exist,
- connect roots with linear factors.

Important explanation:

For degree 2 or 3 over a field, having no root is enough to prove irreducibility. For higher degree, more checks are needed.

---

## 4. Layout and UI Findings

### 4.1 Toggle sections should be closed by default

When all sections are open, the page looks too long and intimidating. Closing toggles by default gives students control.

Applied:

- all three major toggles are closed by default.

### 4.2 Separate boxes improve scanning

The following sections should be separate boxes:

- Aplikasi nyata dan koneksinya,
- Ringkasan agar tidak tersesat,
- Kesalahan umum,
- Inti konsep yang harus dibawa pulang,
- Pelajari lebih lanjut.

Applied:

Each is now visually separated with colored background and border.

### 4.3 Navigation should not distract

The top “Beranda” button was removed because it sat above the breadcrumb and added visual noise. Navigation back to the homepage is more natural after finishing Lab 2.

Applied:

- top header button removed,
- bottom button added: “← Kembali ke Beranda”.

---

## 5. Interaction Design Findings

Each widget should include three things:

1. **Tujuan lab**  
   What the student should learn.

2. **Cara membaca widget**  
   What to look at in the visualization.

3. **Kenapa contoh ini dipakai**  
   Why this real-world example was chosen.

This prevents the widget from becoming confusing decoration.

---

## 6. Beginner Understandability Reflection

Question used during revision:

> Could a very weak high-school student understand the core concept after visiting the page?

Answer:

Partially, but only if the page gives them:

- one simple real-world object,
- one clear operation,
- one compact rule,
- one visual widget,
- one warning about common mistakes.

Therefore, each page was revised to include:

- “Inti konsep yang harus dibawa pulang,”
- “Aplikasi nyata dan koneksinya,”
- “Ringkasan agar tidak tersesat,”
- “Kesalahan umum,”
- “Cara membaca widget,”
- “Kenapa contoh ini dipakai.”

The content should not become too step-by-step or overly long. Instead, it should be complete but compact.

---

## 7. Final Design Principle

The final design principle is:

> Teach abstract algebra as the study of objects, operations, structure, and consistency. Use real-world examples only when they make those four things easier to see. If the real example becomes distracting, replace it with a smaller toy example that preserves the same mathematical structure.

---

## 8. Source List

### Abstract algebra and visual group theory

- Visual Group Theory, Nathan Carter  
  https://web.osu.cz/~Zusmanovich/teach/books/visual-group-theory.pdf

- Group Explorer  
  https://nathancarter.github.io/group-explorer/index.html

- Group Explorer group terms and quotient/coset support  
  https://nathancarter.github.io/group-explorer/help/rf-groupterms/index.html

### Indonesian abstract algebra materials

- Struktur Aljabar, UINSATU repository  
  https://repo.uinsatu.ac.id/33242/1/STRUKTUR%20ALJABAR%20%28Bapak%20muniri%29.pdf

- E-modul Struktur Aljabar Grup, UINSU repository  
  https://repository.uinsu.ac.id/17153/1/e-modul%20Struktur%20Aljabar%20Grup_compressed.pdf

- Buku Teori Ring, UPGRIS repository  
  https://eprints.upgris.ac.id/637/1/Buku%20Teori%20Ring.pdf

- Materi Ideal dan Ring Faktor, UGM  
  https://strukturaljabar.mipa.ugm.ac.id/wp-content/uploads/sites/372/2020/11/KUA-Seri-4-Sesi-1.pdf

- Materi Kekongruenan Modulo dan Keamanan Digital, UNESA  
  https://pendidikan-matematika.fmipa.unesa.ac.id/post/kekongruenan-modulo-rahasia-matematika-di-balik-keamanan-digital

### Teaching and learning references

- Worked examples and cognitive load discussion  
  https://www.tandfonline.com/doi/full/10.1080/01443410.2023.2273762

- Misconceptions in group theory learning  
  https://jurnal.unsil.ac.id/index.php/jarme/article/download/5967/2512

### Applications

- NIST FIPS 197, AES finite field arithmetic  
  https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197-upd1.pdf

- NASA NTRS, finite fields and Reed-Solomon coding  
  https://ntrs.nasa.gov/citations/19770026931

- MIT OCW, Reed-Solomon codes chapter  
  https://ocw.mit.edu/courses/6-451-principles-of-digital-communication-ii-spring-2005/01060b08ba74792ee8d85eb82b9efdb4_chap8.pdf

- SageMath group theory tutorial  
  https://doc.sagemath.org/html/en/thematic_tutorials/group_theory.html

- SageMath polynomial rings documentation  
  https://doc.sagemath.org/html/en/reference/polynomial_rings/index.html

---

## 9. Application Box Revision: Two-Paragraph Rule

The section **Aplikasi nyata dan koneksinya** should contain exactly two paragraphs:

1. **Real-world context paragraph**  
   Explains where the concept appears in a concrete system.

2. **Mathematical connection paragraph**  
   Explicitly maps the real-world object to the algebraic object, operation, and property.

Reason:

A one-paragraph application often becomes either too vague or too compressed. Two paragraphs separate the story from the mathematics, making the section easier to understand without making it too long.

---

## 10. Visual/SVG Iteration Findings

This iteration added compact SVG illustrations to the **Materi** section of every topic page.

### Why SVG illustrations were added

The research direction is consistent with three findings:

1. **Visual Group Theory** emphasizes that group theory is easier for beginners when students build intuition through images and examples before relying only on formal notation.
2. Cognitive-load-oriented teaching recommends worked examples and visual scaffolds so students can connect abstract symbols with concrete representations.
3. Multimodal mathematics education research suggests that visual representations can reduce cognitive load and support problem solving when they are directly tied to the concept being learned.

### Design rule

Use SVG only when it makes the object, operation, or failure mode visible.

Do not add decorative illustrations. Each SVG must answer one question:

- What is the object?
- What is the operation?
- What can go wrong?
- What property is being preserved?

### Page-level SVG decisions

1. **Himpunan dan Fungsi**  
   SVG shows domain, codomain, arrows, and repeated output. This makes function/injective/surjective visible.

2. **Teori Bilangan Dasar**  
   SVG shows modulo as a circular remainder system and connects it to check digits.

3. **Grup Hingga**  
   SVG shows square/sticker rotation and inverse action.

4. **Subgrup Normal**  
   SVG shows cosets as blocks, so quotient becomes visually understandable.

5. **Homomorfisma Grup**  
   SVG shows two paths: operate first then map, or map first then operate.

6. **Ring**  
   SVG shows addition and multiplication modulo 6, including zero divisors.

7. **Daerah Integral dan Field**  
   SVG contrasts Z7 and Z9 to show why field/integral-domain conditions matter.

8. **Homomorfisma Ring dan Ideal**  
   SVG shows cyclic bit shift as a visual entry point into cyclic codes and ideals.

9. **Ring Polinomial**  
   SVG shows a message vector becoming polynomial coefficients.

10. **Faktorisasi Polinomial**  
   SVG shows that roots and factorization depend on the field.

### Text revision rule

Every **Inti konsep yang harus dibawa pulang** was rewritten as a single strong "bawa pulang" idea. This avoids overloading the page while still making the concept complete.

---

## 11. Extra Small SVGs for Hard Parts

This iteration adds a second, smaller SVG inside the **Ringkasan agar tidak tersesat** box of every topic page.

### Why more than one SVG?

One large SVG per topic helps introduce the broad idea, but some algebra topics have a second difficulty: students may understand the story but still confuse the technical distinction.

Examples:

- function vs injective,
- modulo vs inverse modulo,
- action inverse vs numeric reciprocal,
- coset representative vs coset block,
- kernel vs image,
- zero divisor vs ordinary multiplication,
- field vs non-field,
- ideal as absorption rather than just a subset,
- polynomial coefficients vs evaluation values,
- factorization depending on field.

### Design rule for extra SVGs

The extra SVG must be:

- small,
- placed near the summary,
- focused on one misconception,
- paired with one short explanation sentence.

It should not introduce a new story. It should clarify the hardest distinction in the existing topic.

### Research basis

- Research on abstract algebra learning difficulties highlights that students struggle with core terms such as groups, rings, fields, cosets, homomorphisms, and quotient structures.
- Studies on cosets and quotient groups show that representative-choice and coset-as-block reasoning are a major source of difficulty.
- Cyclic code references make clear that the intuitive starting point is cyclic shift, while the hard algebraic jump is the correspondence with ideals in a quotient polynomial ring.
- AES references confirm finite-field arithmetic over GF(2^8), which supports using finite fields as a real-world application but only after the learner sees the simpler inverse/no-zero-divisor idea.

---

## 12. MathJax Safety Note

When a short algebraic condition can be written clearly in plain text, prefer plain Unicode/HTML text over fragile inline LaTeX. This avoids `Math input error` failures in the browser.

Applied example:

- `φ(a + b) = φ(a) + φ(b)`
- `ker φ = {g : φ(g) = e}`

---

## 14. Contextual Writing Revision: No Bridge Paragraphs

User feedback clarified that the jumpiness was in the writing itself, not the placement of boxes.

### Research basis

The revision uses clearer explanatory writing principles:

1. **Concrete before abstract**  
   Start each explanation with a situation the learner can imagine before naming the mathematical structure.

2. **Pictorial/visual before formal language**  
   The existing SVGs remain useful, but the surrounding text must explain why the visual matters.

3. **Context before jargon**  
   Terms such as kernel, image, normal, ideal, and field should appear after the problem they solve is introduced.

4. **One paragraph = one move**  
   The first application paragraph explains the real situation. The second paragraph maps it to the mathematical structure.

### Applied writing rule

Do not add extra "Jembatan" paragraphs. Instead, rewrite the paragraphs so they already contain the transition:

- situation → problem,
- problem → mathematical term,
- term → what to check,
- check → why it matters.

This keeps the page compact while making the ideas less jumpy.

---

## 15. Deeper Inspiring Text Revision

This revision makes the text deeper, more contextual, and less jumpy for a true beginner.

Research basis:
- Concrete–Pictorial–Abstract learning: start from a concrete situation, move to visual representation, then introduce abstract language.
- Visual Group Theory: build intuition with images and examples before formal definitions.
- Abstract algebra learning difficulty research: terms such as coset, kernel, image, ideal, ring, and field are easier when introduced as names for problems students already understand.

Applied rule:
Each topic should answer:
1. Why does this concept exist?
2. What concrete problem motivates it?
3. What does the formal term name in that problem?
4. How should the interactive lab be read?

Lab rule:
Each lab gets a short `Cara membaca lab ini` note so the widget is not just an animation, but a guided observation.

User feedback:
- Do not merely add more examples.
- Make the explanation itself longer and deeper.
- Merge repeated `Cara membaca lab ini` and `Cara membaca widget ini`.
- Expand conceptual explanations by explaining meaning, condition, consequence, and relation to other terms.
- Do not lengthen by adding many unrelated examples.
