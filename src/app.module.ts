import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { ProductTypeModule } from './product_type/product_type.module';
import { ProductModule } from './product/product.module';
import { OrderItemModule } from './order_item/order_item.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pw2_exer',
      autoLoadEntities: true,
      synchronize: true
    }),
    CustomerModule, 
    OrderModule, 
    OrderItemModule, 
    ProductModule, 
    ProductTypeModule, 
    ManufacturerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
