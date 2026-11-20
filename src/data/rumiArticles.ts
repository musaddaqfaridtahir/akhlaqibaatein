import { Article } from './types';
import { rumiArticlesDaftar1 } from './rumiArticlesDaftar1';
import { rumiArticlesDaftar1_part2 } from './rumiArticlesDaftar1_part2';
import { rumiArticlesDaftar3 } from './rumiArticlesDaftar3';

export const rumiArticles: Article[] = [
  ...rumiArticlesDaftar1,
  ...rumiArticlesDaftar1_part2,
  ...rumiArticlesDaftar3,
];
