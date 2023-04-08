import ExpressionNoeud from './ExpressionNoeud.model'
import NoeudModel from './Noeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class ConditionNode extends NoeudModel {
  constructor(public value: ExpressionNoeud) {
    super()
  }
  accept(visitor: VisiteurNoeud): void {
    visitor.visitExpression(this.value)
    visitor.visitCondition(this)
  }
}
