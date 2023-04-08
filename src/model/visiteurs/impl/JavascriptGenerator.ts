import AdditionNoeud from '../../AdditionNoeud.model'
import AssignationNoeud from '../../AssignationNoeud.model'
import ConditionNode from '../../ConditionNode.model'
import MultiplicationNoeud from '../../MultiplicationNoeud.model'
import SiNoeud from '../../SiNoeud.model'
import SoustractionNoeud from '../../SoustractionNoeud.model'
import SuperieurNoeud from '../../SuperieurNoeud.model'
import AbstractGenerateur from './AbstractGenerateur'
import CodeGenerator from './CodeGenerator'

export default class JavascriptGenerator
  extends AbstractGenerateur
  implements CodeGenerator
{
  visitAssignation(node: AssignationNoeud): AssignationNoeud {
    this.code += 'var '
    this.visitLitteral(node.variable)
    this.code += ' = '
    this.visitExpression(node.expression)
    return node
  }
  visitAddition(node: AdditionNoeud): AdditionNoeud {
    this.visitExpression(node.a)
    this.code += ' + '
    this.visitExpression(node.b)
    return node
  }
  visitCondition(node: ConditionNode): ConditionNode {
    this.visitExpression(node.value)
    return node
  }

  visitMultiplication(node: MultiplicationNoeud): MultiplicationNoeud {
    this.visitExpression(node.a)
    this.code += ' * '
    this.visitExpression(node.b)
    return node
  }

  visitSi(node: SiNoeud): SiNoeud {
    this.code += 'if ('
    this.visitCondition(node.condition)

    this.code += ') { '

    this.visitExpression(node.conditionVraieExpression)
    this.code += ' } else { '
    this.visitExpression(node.conditionFausseExpression)
    this.code += ' }'
    return node
  }
  visitSoustraction(node: SoustractionNoeud): SoustractionNoeud {
    this.visitExpression(node.a)
    this.code += ' - '
    this.visitExpression(node.b)
    return node
  }
  visitSuperieur(node: SuperieurNoeud): SuperieurNoeud {
    this.visitExpression(node.a)
    this.code += ' > '
    this.visitExpression(node.b)
    return node
  }

  print(): string {
    return this.code
  }
}
