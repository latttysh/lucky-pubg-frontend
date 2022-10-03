import React, { FunctionComponent } from 'react';
import s from "./faq.module.scss"
interface OwnProps {}

type Props = OwnProps;

const Faq: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.faq}>
          <span className={s.title}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</span>
          <div className="accordion">

              <section>
                  <input type="checkbox" className="accordion__checkbox" id="accordion-heading-1"/>
                      <label className="accordion__heading" htmlFor="accordion-heading-1">Я открыл кейс,  но вещь не приходит,  как решить данную проблему? </label>
                      <div className="accordion__content">
                          <p>Зайдите в свой профиль и нажмите на кнопку “забрать”, чтобы получить свою покупку.</p>
                      </div>
              </section>

              <section>
                  <input type="checkbox" className="accordion__checkbox" id="accordion-heading-2"/>
                      <label className="accordion__heading" htmlFor="accordion-heading-2">Некоторые кейсы не открываются/отображаются пустые кейсы, почему?</label>
                      <div className="accordion__content">
                          <p>Если кейс куплен, то он должен содержать в себе необходимые вещи. Попробуйте обновить страницу. Если проблема осталась, напишите нам в поддержку.</p>
                      </div>
              </section>

              <section>
                  <input type="checkbox" className="accordion__checkbox" id="accordion-heading-3"/>
                      <label className="accordion__heading" htmlFor="accordion-heading-3">Я открыл кейс,  как вывести товар к себе?</label>
                      <div className="accordion__content">
                          <p>Зайдите в свой профиль и нажмите на кнопку “забрать”, чтобы получить свою покупку.</p>
                      </div>
              </section>

              <section>
                  <input type="checkbox" className="accordion__checkbox" id="accordion-heading-4"/>
                  <label className="accordion__heading" htmlFor="accordion-heading-4">Не удается авторизироваться на сайте, слишком долгая загрузка, что делать? </label>
                  <div className="accordion__content">
                      <p>Как правило, проблема заключается в расширении вашего браузера. Попробуйте удалить подозрительные расширения, а также проверить поддержку JavaScript на вашем устройстве, возможно, она отключена.</p>
                  </div>
              </section>

              <section>
                  <input type="checkbox" className="accordion__checkbox" id="accordion-heading-5"/>
                  <label className="accordion__heading" htmlFor="accordion-heading-5">В поддержке долго не отвечают, что делать?  </label>
                  <div className="accordion__content">
                      <p>Наша служба поддержки работает по графику, указанному на странице. Если вы не получили ответа, то значит нужно немного подождать, и вам обязательно помогут.</p>
                  </div>
              </section>
              <section>
                  <input type="checkbox" className="accordion__checkbox" id="accordion-heading-6"/>
                  <label className="accordion__heading" htmlFor="accordion-heading-6">Мне выпадают плохие предметы, почему?  </label>
                  <div className="accordion__content">
                      <p>К сожалению, хорошие предметы выпадают не всегда. Попробуйте еще раз, и у вас обязательно получится!</p>
                  </div>
              </section>
              <section>
                  <input type="checkbox" className="accordion__checkbox" id="accordion-heading-7"/>
                  <label className="accordion__heading" htmlFor="accordion-heading-7">При попытке открыть кейс выдаёт ошибку, почему?  </label>
                  <div className="accordion__content">
                      <p>Проверьте ваш баланс, не зачислились ли вам средства после покупки кейса обратно. Если всё в порядке, напишите нам в поддержку и мы обязательно поможем.</p>
                  </div>
              </section>

              <section>
                  <input type="checkbox" className="accordion__checkbox" id="accordion-heading-8"/>
                  <label className="accordion__heading" htmlFor="accordion-heading-8">Каким образом я могу пополнить баланс?  </label>
                  <div className="accordion__content">
                      <p>Вы можете пополнить свой баланс после авторизации через личный кабинет.</p>
                  </div>
              </section>
          </div>
      </div>
  );
};

export default Faq;
