import React from "react";

import '../style/main.css'

import bugdroid from '../img/bugdroid.png';
import danDroids from '../img/danDroids.png';
import danDroidsPq from '../img/danDroidsPq.png';
import irinaBlok from '../img/irinaBlok.jpg';
import irinaBlokPq from '../img/irinaBlokPq.jpg';

import Footer from './Footer.jsx'

function Main() {
    return (
        <>
        <main>
            <article>
                <h1>História do Mascote do Android</h1>
                <p>Provavelmente você sabe que o sistema operacional <strong>Android</strong>, mantido pelo <strong>Google</strong> é um dos mais utilizados para dispositivos móveis em todo o mundo. Mas tavez você não saiba que o seu simpático mascote tem um nome e uma história muito curiosa? Pois acompanhe esse artigo para aprender muita coisa sobre esse robozinho.</p>
                
                <h2>A primeira versão</h2>
                <p>A primeira tentativa de criar um mascote surgiu em 2007 e veio de um desenvolvedor chamado <a href="https://androidcommunity.com/dan-morrill-shows-us-the-android-mascot-that-almost-was-20130103/" target="_blank">Dan Morrill</a>. Ele conta que abriu o <a href="https://inkscape.org/pt-br/" target="_blank" class="externo">Inkscape</a> (software livre para vetorização de imagens) e criou sua própria versão de robô. O objetivo era apenas personificar o sistema apenas para a a sua equipe, não existia nenhuma solicitação da empresa para a criação de um mascote.</p>
            
                <picture>
                    <source media="(max-width: 670px)" srcset={danDroidsPq}/>
                    <img src={danDroids} alt="Dan Droids"/>
                </picture>

                <p>Essa primeira versão bizarra até foi batizada em homenagem ao seu criador: seriam os <strong>Dandroids</strong>.</p>
                
                <h2>Surge um novo mascote</h2>
                <p>A ideia de ter um mascote foi amadurecendo e a missão foi passada para uma profissional da área. A ilustradora Russa <a href="https://www.irinablok.com/" target="_blank" class="externo">Irina Blok</a>, também funcionária do Google, ficou com a missão de representar o pequeno robô de uma maneira mais agradável.</p>
                
                <picture>
                    <source media="(max-width: 670px)" srcset={irinaBlokPq}/>
                    <img src={irinaBlok} alt="teste"/>
                </picture>

                <p>A ideia principal da Irina era representar tudo graficamente com poucos traços e de forma mais chapada. O desenho também deveria gerar identificação rápida com quem o olha. Surgiu então o <strong>Bugdroid</strong>, o novo mascote do Android.</p>

                <img src={bugdroid} alt="Bugdroid" class="pequena"/>

                <p>A ideia principal da Irina era representar tudo graficamente com poucos traços e de forma mais chapada. O desenho também deveria gerar identificação rápida com quem o olha. Surgiu então o <strong>Bugdroid</strong>, o novo mascote do Android.</p>

                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/l2UDgpLz20M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <aside>
                    <h3>Quer aprender mais? </h3>

                    <p>Outro assunto curioso em relação ao Android é que cada versão sempre foi nomeada em homenagem a um doce, em ordem alfabética a partir da versão 1.5 até a 9.0.</p>
                    
                    <ul>
                        <li>1.5 - <abbr title="Bolo de Copo">Cupcake</abbr></li>
                        <li>1.6 - <abbr title="Rosquinha">Donut</abbr></li>
                        <li>3.0 - <abbr title="Bomba">Eclair</abbr></li>
                        <li>2.2 - <abbr title="Iorgurte Congelado">Froyo</abbr></li>
                        <li>2.3 - <abbr title="Biscoito de Gengibre">Gingerbread</abbr></li>
                        <li>3.0 - <abbr title="Favo de mel">Honeycomb</abbr></li>
                        <li>4.0 - <abbr title="Sanduíche de Sorvete">Ice Cream Sandwich</abbr></li>
                        <li>4.1 - <abbr title="Jujuba">Jelly Bean</abbr></li>
                        <li>4.4 - <abbr title="KitKat">KitKat</abbr></li>
                        <li>5.0 - <abbr title="Pirulito">Lolipop</abbr></li>
                        <li>6.0 - <abbr title="Mashmallow">Marshmallow</abbr></li>
                        <li>7.0 - <abbr title="Torrone">Nougat</abbr></li>
                        <li>8.0 - <abbr title="Oreo">Oreo</abbr></li>
                        <li>9.0 - <abbr title="Torta">Pie</abbr></li>
                    </ul>

                    <p>Infelizmente, o <strong>Android Q</strong> não existiu, pois o Google resolveu pôr fim a essa divertida prática e começou a usar numerações, o que deu origem ao Android 10.</p>
                </aside>

                <p>Acesse aqui o site <a href="https://www.androidauthority.com/history-android-os-name-789433/" target="_blank" class="externo">Android History</a> para conhecer a sequência das versões "adocicadas" e o que cada uma trouxe para o <strong>sistema Android</strong>z.</p>

            </article>
        </main>

        <Footer/>
        </>
    );
};

export default Main;