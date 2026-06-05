new Sakura('body', {
  colors: [
    { gradientColorStart: 'rgba(255, 183, 197, 0.9)', gradientColorEnd: 'rgba(255, 197, 208, 0.9)', gradientColorDegree: 120 },
    { gradientColorStart: 'rgba(255,189,189,0.9)', gradientColorEnd: 'rgba(227,170,181,0.9)', gradientColorDegree: 120 },
    { gradientColorStart: 'rgba(212,152,163,0.9)', gradientColorEnd: 'rgba(242,185,196,0.9)', gradientColorDegree: 120 }
  ],
  blowAnimations: ['blow-soft-left', 'blow-medium-right', 'blow-soft-right', 'blow-medium-left'],
  className: 'sakura',
  fallSpeed: 1.5,
  maxSize: 14,
  minSize: 8,
  delay: 300
});
