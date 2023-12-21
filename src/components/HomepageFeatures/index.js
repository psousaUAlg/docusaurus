import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Clientes',
    Svg: require('@site/static/img/person.svg').default,
    description: (
      <>
        Módulo de gestão de Clientes
      </>
    ),
  },
  {
    title: 'Veículos',
    Svg: require('@site/static/img/car.svg').default,
    description: (
      <>
        Módulo de gestão de Veículos
      </>
    ),
  },
  {
    title: 'Facturação',
    Svg: require('@site/static/img/Euro.svg').default,
    description: (
      <>
        Módulo de gestão de Faturação
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
