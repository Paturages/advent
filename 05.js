const input = `0
0
1
2
0
1
0
2
-2
-6
0
-7
2
2
1
-2
1
1
-11
-14
-16
-14
-12
-5
-2
-21
-15
-9
0
-13
-4
-19
-31
1
-15
-1
-23
-18
0
-18
-11
-21
-6
2
-38
2
-38
-40
-15
-2
-23
-42
-23
-36
-37
-34
-26
-51
-14
-8
-56
-11
-14
-40
-39
-26
-35
-48
-52
-18
-16
-11
-38
-4
-70
-20
-10
-37
-75
-33
-39
-37
-74
-17
-83
-13
-75
-56
-44
-40
-20
-18
-74
-32
-48
-11
-80
-88
-33
-67
-96
-67
-49
-55
-101
-8
-77
-33
-93
-22
-21
-99
-33
-12
-111
-105
-77
-76
-90
-63
-76
-55
-65
-106
-56
-93
-121
-31
-86
-102
-116
-120
-17
-95
-110
-128
-122
-135
-133
-124
-50
-32
-86
-11
-127
-42
-9
-41
-28
-93
-13
-16
-8
-138
-111
-103
-25
-22
-133
-52
-27
-6
-67
-72
-115
-133
-146
-46
-128
-99
-115
-16
-113
-105
1
-76
-2
1
-66
-164
-87
-8
-92
-180
-137
-39
-127
-124
-66
-96
-185
-13
-65
-178
-16
-32
-24
-84
-49
-7
-198
-101
-119
-187
-71
-125
-130
-72
-130
-43
-136
-171
-32
-210
-69
-195
-207
-197
-190
-117
-196
-143
-128
-155
-160
-53
-205
-15
-86
-227
-128
-115
-58
-96
-52
-100
-41
-84
-61
-50
-91
-158
-30
-230
-125
-177
-181
-47
-43
-241
-52
-102
-161
-16
-130
-21
-22
-249
-78
-101
-51
-229
-148
-132
-213
-264
-175
-128
-102
-26
-86
-84
-100
-132
-228
-118
-46
-77
-230
-98
-193
-191
-142
-193
-183
-58
-59
-254
-256
-108
-12
-46
-11
-143
-22
-121
-68
-282
-94
-22
-172
-246
-174
-76
-3
-117
-237
-258
-29
-105
-32
-177
-125
-70
-176
-113
-152
-227
-298
-199
-179
-162
-241
-230
-8
-202
-296
-194
-82
-188
-136
-24
-171
-185
-272
-124
-306
-230
-249
-64
-139
-143
-293
-218
-167
-208
-254
-171
-119
-82
-284
-262
-252
-92
-230
-193
-173
-269
-173
-13
0
-148
-151
-241
-120
-20
-22
-218
-6
-314
-347
-58
-180
-242
-333
-247
-67
-137
-102
-32
-102
-88
-42
-284
-109
-281
-43
-63
-205
-268
-273
-235
-119
-185
-62
-56
-260
-47
-353
-123
-312
0
-76
-352
-365
-284
-105
-62
-165
-292
-5
-46
-31
-116
-147
-34
-149
-79
-139
-132
-84
-58
-130
-125
-188
-227
-2
-220
-88
-96
-38
-308
-214
-357
-19
-410
-292
-150
-151
1
-252
-172
-414
-15
-207
-184
-286
-161
-55
-158
-330
-53
-310
-295
-248
-126
-425
-10
-289
-148
-146
-436
-279
-48
-321
-196
-162
-55
-125
-62
-381
-337
-85
-428
-470
-180
-392
-450
-376
-73
-206
-115
-289
-318
-22
-200
-176
-410
-380
-470
-418
-163
-424
-288
-374
-358
-386
-340
-403
-81
-7
-378
1
-320
-323
-288
-439
-437
-90
-159
-379
-69
-236
-168
-232
-232
-42
-257
-437
-40
-390
-241
-54
-247
-76
-325
-351
-259
-328
-283
-5
-169
-114
-252
-131
-223
-446
-482
-7
-285
-486
-260
-421
-498
-32
-182
-317
-201
-370
-518
-129
-359
-67
-209
-541
-323
-132
-197
-70
-171
-258
-372
-228
-4
-360
-144
-307
-226
-533
-435
-318
-284
-284
-150
-539
-46
-81
-144
-188
-264
-136
-138
-106
-65
-262
-250
-176
-261
-112
-227
-304
-159
-425
-117
-441
-111
-468
-2
-84
-197
1
-575
-305
-401
-114
-143
-180
-16
-450
-24
-357
-104
-434
-435
-345
-247
-484
-282
-263
-389
-463
-178
-144
-256
-94
-522
-302
-524
-309
-275
-350
-596
-462
-317
-543
-8
-374
-404
-302
-610
-111
-358
2
-353
-397
-165
-324
-574
-618
-168
-636
-389
-609
-54
-121
-256
-604
-588
-454
-100
-212
-65
-300
-592
-43
-230
-652
-638
-67
-499
-614
-419
-577
-96
-257
-519
-458
-14
-26
-370
-187
-319
-528
-436
-87
-673
-535
-473
-670
-594
-589
-629
-180
-13
-668
-369
-679
-587
-624
-123
-363
-241
-343
-259
-123
-319
-608
-470
-336
-291
-676
-535
-226
-11
-224
-43
-30
-605
-670
-544
-248
-609
-144
-328
-177
-360
-628
-51
-724
-407
-625
-433
-192
-455
-603
-581
-33
-696
-160
-464
-510
-3
-144
-113
-87
-519
-263
-161
-94
-716
-484
-509
-615
-373
-734
-686
-732
-395
-163
-432
-26
-716
-599
-596
-648
-91
-716
-540
-429
-456
-744
-344
-298
-689
-428
-119
-323
-196
-41
-602
-724
-413
-444
-614
-331
-697
-115
-7
-409
-272
-672
-224
-732
-203
-37
-397
-794
-161
-512
-664
-193
-245
-490
-439
-696
-661
-717
-424
-308
-481
-215
-658
-705
-389
-90
-619
-297
-670
-125
-119
-268
-553
-227
-733
-142
-333
-52
-609
-795
-422
-202
-579
-397
-431
-561
-140
-467
-688
-486
-493
-279
-457
-295
-181
-823
-808
-495
-620
-652
-80
-22
-26
-769
0
-439
-31
-458
-5
-221
-675
-443
-809
-845
-234
-429
-425
-754
-820
-442
-561
-513
-462
-840
-596
-113
-736
-12
-123
-747
-735
-732
-209
-478
-504
-784
-522
-257
-695
-676
-331
-767
-801
-128
-571
-683
-757
-475
-749
-53
-366
-795
-562
-632
-284
-488
-692
-368
-883
-542
-745
-10
-693
-752
-136
-736
-347
-855
-521
-151
-324
-126
-678
-28
-875
-832
-474
-657
-569
-518
-642
-351
-850
-45
-383
-362
-655
-590
-184
-543
-563
-631
-165
-607
-732
-450
-219
-774
-461
-823
-651
-48
-750
-246
-341
-805
-620
-425
-696
-874
-502
-186
-143
-77
-452
-710
-103
-836
-824
-775
-108
-823
-937
-969
-392
-17
-725
-226
-441
-489
-669
-665
-182
-625
-905
-523
-925
-573
-821
-786
-734
-21
-819
-181
-342
-625
-12
-705
-275
-756
-79`;

// Part 1
(() => {
  const l = input.split('\n').map(x => +x);
  let i = 0, steps = 0;
  for (; i >= 0 && i < l.length; steps++) {
    const movement = l[i]++;
    i += movement;
  }
  return steps;
})();

// Part 2
(() => {
  const l = input.split('\n').map(x => +x);
  let i = 0, steps = 0;
  for (; i >= 0 && i < l.length; steps++) {
    const movement = l[i];
    l[i] += l[i] > 2 ? -1 : 1;
    i += movement;
  }
  return steps;
})();