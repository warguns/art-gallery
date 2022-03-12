import convict from 'convict';

const moocConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/art-backend-dev'
    }
  },
  typeorm: {
    type: {
      doc: 'The Typeorm Type',
      format: String,
      env: 'TYPEORM_TYPE',
      default: 'mysql'
    },
    host: {
      doc: 'The Typeorm type host',
      format: String,
      env: 'TYPEORM_HOST',
      default: 'mysql'
    },
    port: {
      doc: 'The Typeorm type port',
      format: Number,
      env: 'TYPEORM_PORT',
      default: 3306
    },
    username: {
      doc: 'The Typeorm type username',
      format: String,
      env: 'TYPEORM_USERNAME',
      default: 'root'
    },
    password: {
      doc: 'The Typeorm type password',
      format: String,
      env: 'TYPEORM_PASSWORD',
      default: 'root'
    },
    database: {
      doc: 'The Typeorm type database',
      format: String,
      env: 'TYPEORM_DATABASE',
      default: 'art'
    },
    synchronize: {
      doc: 'The Typeorm type sync',
      format: Boolean,
      env: 'TYPEORM_SYNC',
      default: true
    },
    logging: {
      doc: 'The Typeorm type sync',
      format: Boolean,
      env: 'TYPEORM_SYNC',
      default: false
    },
    entities_dir: {
      doc: 'The Typeorm entities dir',
      format: String,
      env: 'TYPEORM_ENTITIES_DIR',
      default: 'src/Contexts/Art/Pictures/infrastructure/persistence/entity'
    },
    migrations_dir: {
      doc: 'The Typeorm migrations dir',
      format: String,
      env: 'TYPEORM_MIGRATIONS_DIR',
      default: 'src/Contexts/Art/Pictures/infrastructure/persistence/migration'
    },
    subscriptions_dir: {
      doc: 'The Typeorm subscriptions dir',
      format: String,
      env: 'TYPEORM_SUBSCRIPTIONS_DIR',
      default: 'src/Contexts/Art/Pictures/infrastructure/persistence/subscriber'
    }
  },
  rabbitMQ: {
    host: {
      doc: 'The RabbitMQ connection host',
      format: String,
      env: 'RABBITMQ_HOST',
      default: 'localhost'
    },
    user: {
      doc: 'The RabbitMQ connection user',
      format: String,
      env: 'RABBITMQ_DEFAULT_USER',
      default: 'guest'
    },
    password: {
      doc: 'The RabbitMQ connection password',
      format: String,
      env: 'RABBITMQ_DEFAULT_PASS',
      default: 'guest'
    },
    queue: {
      doc: 'Queue where subscribers listen on',
      format: String,
      env: 'RABBITMQ_QUEUE',
      default: 'Mooc-DomainEvents'
    },
    exchange: {
      doc: 'Exchange where events are published',
      format: String,
      env: 'RABBITMQ_EXCHANGE',
      default: 'DomainEvents'
    }
  }
});

moocConfig.loadFile([__dirname + '/default.json', __dirname + '/' + moocConfig.get('env') + '.json']);

export default moocConfig;
