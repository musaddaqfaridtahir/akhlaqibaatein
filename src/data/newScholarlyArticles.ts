import { Article } from './types';
import { ashraMubashraArticle } from './ashraMubashraArticle';
import { rumiAllegoriesBatch1 } from './rumiAllegoriesBatch1';
import { rumiAllegoriesBatch2 } from './rumiAllegoriesBatch2';

export const newScholarlyArticles: Article[] = [
  ashraMubashraArticle,
  ...rumiAllegoriesBatch1,
  ...rumiAllegoriesBatch2,
];
