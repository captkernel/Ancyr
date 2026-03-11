export interface ProcessStep {
  step: string;
  title: string;
  body: string;
  imageLabel: string;
  imageSrc: string;
}

export const processSteps: ProcessStep[] = [
  { step: '01', title: 'Sourcing & Combing', body: 'Himalayan Angora is combed from Angora rabbits raised in the highlands above Kullu, Himachal Pradesh. Combing preserves the full fibre length and the natural halo. We source directly. No intermediary, no mystery about provenance.', imageLabel: 'Combing process \u2014 hands drawing fibre, close-up, natural light', imageSrc: '/images/craft/combing.svg' },
  { step: '02', title: 'Spinning', body: 'The combed fibre is spun into yarn at our plant. Angora spinning requires specific tension management \u2014 too tight and the halo disappears, too loose and the yarn has no structure. We have been calibrating this for decades.', imageLabel: 'Spinning \u2014 traditional ring frame, Angora yarn forming', imageSrc: '/images/craft/spinning.svg' },
  { step: '03', title: 'Weaving', body: 'Our shawls and stoles are woven on traditional pit looms. Handloom weaving allows us to produce the structures that give Angora its drape \u2014 the way it falls off a shoulder, the way it holds heat without weight.', imageLabel: 'Handloom weaving \u2014 warp threads, shuttle in motion, warm light', imageSrc: '/images/craft/weaving.svg' },
  { step: '04', title: 'Finishing', body: 'After weaving, each piece is washed, hand-finished, and inspected. Finishing Angora is delicate \u2014 the wrong temperature collapses the fibre. Every shawl that leaves our plant has been through this process under human eyes.', imageLabel: 'Hand finishing \u2014 artisan inspecting cloth, quality check', imageSrc: '/images/craft/finishing.svg' },
  { step: '05', title: 'Verification', body: 'Composition is verified. Not inferred. Not estimated. We maintain documentation for every lot \u2014 fibre source, composition testing, production date. Transparency is not a marketing position; it is a production discipline.', imageLabel: 'Composition verification \u2014 fibre test documentation, label detail', imageSrc: '/images/craft/fibre-macro.svg' },
];

export interface MaterialStat {
  value: string;
  label: string;
  note: string;
}

export const materialStats: MaterialStat[] = [
  { value: '11\u201316', label: 'Micron fibre diameter', note: 'Among the finest natural fibres' },
  { value: '7\u00d7', label: 'Warmth per weight', note: 'vs. standard wool by volume' },
  { value: '100%', label: 'Composition', note: 'Where we say 100%, it is 100%' },
  { value: '3 Gen', label: 'Craft lineage', note: 'Three generations of production knowledge' },
];
