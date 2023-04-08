import LitteralNoeud from '../../LitteralNoeud.model'
import NombreNoeud from '../../NombreNoeud.model'
import AbstractVisiteur from './AbstractVisiteur'
import CodeGenerator from './CodeGenerator'

export default abstract class AbstractGenerateur
  extends AbstractVisiteur
  implements CodeGenerator
{
  protected code = ''
  abstract print(): string
  visitNumberValue(node: number): number {
    this.code += '' + node
    return node
  }
  visitString(node: string): string {
    this.code += '' + node
    return node
  }
  visitLitteral(node: LitteralNoeud): LitteralNoeud {
    this.visitString(node.name)
    return node
  }
  visitNumber(node: NombreNoeud): NombreNoeud {
    this.visitNumberValue(node.value)
    return node
  }
}
