import { NavLink } from 'react-router-dom';
import FintechSVG from '../assets/fintech-logo';

import configuracoes from '../assets/icons/configuracoes.svg';
import contato from '../assets/icons/contato.svg';
import resumo from '../assets/icons/resumo.svg';
import sair from '../assets/icons/sair.svg';
import vendas from '../assets/icons/vendas.svg';
import webhooks from '../assets/icons/webhooks.svg';

export const SideNav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a href="">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a href="">Configurações</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a href="">Contato</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  );
};
