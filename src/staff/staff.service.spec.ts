import { Test, TestingModule } from '@nestjs/testing';
import { StaffDetailsService, StaffService } from './staff.service';

describe('StaffService', () => {
  let service: StaffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffService],
    }).compile();

    service = module.get<StaffService>(StaffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('StaffDetailsService', () => {
  let service: StaffDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffDetailsService],
    }).compile();

    service = module.get<StaffDetailsService>(StaffDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
